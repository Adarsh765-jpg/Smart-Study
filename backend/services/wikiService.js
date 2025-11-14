import axios from "axios";

export async function getWikiSummary(topic) {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      topic
    )}`;

    const res = await axios.get(url, {
      headers: {
        "User-Agent": "SmartStudyAssistant/1.0",
      },
    });

    return res.data.extract || "";
  } catch (err) {
    console.error("Wiki error:", err.message);
    return "";
  }
}
