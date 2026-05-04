import csv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# IMPORTANT: Enable CORS so React can talk to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For dev, allow everything
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_csv_data():
    items = []
    try:
        with open("MOCK_DATA.csv", mode="r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                items.append(row)
        return items
    except FileNotFoundError:
        return None

@app.get("/items")
async def read_items():
    data = get_csv_data()
    if data is None:
        raise HTTPException(status_code=404, detail="CSV file not found")
    return data

@app.get("/items/{item_id}")
async def read_item(item_id: str):
    data = get_csv_data()
    # Filter for the specific ID (CSV reads everything as strings initially)
    item = next((i for i in data if i.get("id") == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)