const fs = require("fs");

const token = process.env.MINDMEISTER_TOKEN;
const mapId = "4068740164";

if (!token) {
  console.error("MINDMEISTER_TOKEN is not set");
  process.exit(1);
}

const roadmap = JSON.parse(
  fs.readFileSync("roadmap.json", "utf8")
);

async function main() {
  console.log("ENTER 経営OS sync started");
  console.log("Target map:", mapId);
  console.log("Roadmap:", roadmap.name);

  const response = await fetch(
    `https://www.mindmeister.com/api/v2/maps/${mapId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    }
  );

  const body = await response.text();

  if (!response.ok) {
    console.error("MindMeister API error:", response.status);
    console.error(body);
    process.exit(1);
  }

  console.log("MindMeister connection successful");
  console.log(body);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
console.log("SYNC FINISHED");
