import React from 'react';

/**
 * =========================================================
 * PART 1: DEMO (The "Gold Standard")
 * =========================================================
 */

// Using a Union Type to avoid 'erasableSyntaxOnly' errors
export type UserRole = "ADMIN" | "STUDENT";

type Course = {
  id: number;
  title: string;
  tags: string[];
};

type User = {
  name: string;
  role: UserRole;
  status: "online" | "offline";
  currentCourse?: Course;
};

const demoUser: User = {
  name: "Prof. Math",
  role: "ADMIN",
  status: "online",
  currentCourse: { id: 101, title: "TS Basics", tags: ["logic", "safety"] }
};

console.log("DEMO - User Course:", demoUser.currentCourse?.title);


/**
 * =========================================================
 * PART 2: MEDIUM EXERCISES (Student Lab)
 * =========================================================
 */

// --- EXERCISE 1: The Order System ---
/* 1. Define a Union Type named OrderStatus: "Pending" | "Shipped" | "Delivered" */
/* YOUR CODE HERE */

type Order = {
  id: number;
  item: string;
  status: any; // 2. Change 'any' to OrderStatus
};

const myOrder: Order = {
  id: 5005,
  item: "Mechanical Keyboard",
  status: "Pending"
};

// --- TEST EX 1 ---
console.log("EX 1 - Order Status:", myOrder.status);


// --- EXERCISE 2: The Playlist ---
type MediaKind = "Video" | "Audio";

type PlaylistItem = {
  title: string;
  /* 3. Add 'kind' property with MediaKind type here */
};

/* 4. Type 'myPlaylist' as an array of PlaylistItem */
const myPlaylist: any[] = [
  { title: "Intro Song", kind: "Audio" },
  { title: "React Tutorial", kind: "Video" }
];

// --- TEST EX 2 ---
console.log("EX 2 - Playlist Length:", myPlaylist.length);
myPlaylist.forEach(item => console.log(`- ${item.title} (${item.kind})`));


// --- EXERCISE 3: The Sensor Data ---
type Sensor = {
  id: string;
  reading?: { value: number; unit: string; };
};

const checkSensor = (s: Sensor) => {
  /* 5. Use ?. and ?? to handle missing data */
  const result = "YOUR LOGIC HERE";
  return result;
};

// --- TEST EX 3 ---
console.log("EX 3 - Sensor (Active):", checkSensor({ id: "A1", reading: { value: 24, unit: "C" } }));
console.log("EX 3 - Sensor (Broken):", checkSensor({ id: "B2" }));


// --- EXERCISE 4: The Dashboard ---
type DashboardBoxProps = {
  label: string;
  /* 6. Use React.ReactNode here */
  content: any;
};

// --- TEST EX 4 (Logic Only) ---
const testDashboard: DashboardBoxProps = {
  label: "User Growth",
  // 7. This is where ReactNode shines! 
  // It can be a string, a number, OR a whole block of JSX.
  content: (
    <div className="stat-container">
      <span className="number">1,240</span>
      <p>+12% from last month</p>
    </div>
  )
};

// To "log" it in a way that makes sense in a browser:
console.log("EX 4 - Dashboard Label:", testDashboard.label);
console.log("EX 4 - Dashboard Content Type:", typeof testDashboard.content);
/**
 * =========================================================
 * FINAL BOSS: THE WEATHER APP
 * =========================================================
 */

/* Task: Create 'WeatherReport' type.
  - unit: "C" | "F"
  - condition: "Sunny" | "Rainy" | "Cloudy"
  - forecast: number[] (Optional)
*/

/* YOUR TYPE HERE */

const report: any = {
  // Fill this to match your WeatherReport
};

// --- FINAL TEST ---
/* 8. Use Elvis to log the first forecast day safely */
console.log("FINAL BOSS - Day 1 Temp:", "YOUR LOGIC HERE");