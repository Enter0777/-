console.log("MindMeister sync started");

const token = process.env.MINDMEISTER_TOKEN;

if (!token) {
  console.error("MINDMEISTER_TOKEN is not set");
  process.exit(1);
}

console.log("MindMeister token loaded successfully");
