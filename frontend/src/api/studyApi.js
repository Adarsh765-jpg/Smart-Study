import axios from "axios";

const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function fetchStudyData(topic, mode = "normal") {
  if (!topic) throw new Error("Missing topic");

  const url = `${BASE.replace(/\/$/, "")}/study?topic=${encodeURIComponent(
    topic
  )}&mode=${encodeURIComponent(mode)}`;

  try {
    const res = await axios.get(url, { timeout: 15000 });
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw new Error(
      err?.response?.data?.message || "Failed to fetch study data"
    );
  }
}
