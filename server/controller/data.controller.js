import Compatibility from "../model/data.model.js";

export const checkLove = (req, res) => {
  const { userName, partnerName } = req.body;

  if (!userName || !partnerName) {
    return res.status(400).json({ message: "Names are required" });
  }

  const compatibilityPercentage = Math.floor(Math.random() * (98 - 50 + 1)) + 50;

  const compatibilityData = new Compatibility({
    userName,
    partnerName,
    compatibility: compatibilityPercentage,
    date: new Date(),
  });

  // Save the compatibility data
  compatibilityData.save()
    .then(() => {
      res.status(200).json({ compatibility: compatibilityPercentage });
    })
    .catch((error) => {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Error saving compatibility data." });
    });
};
