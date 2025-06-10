const namespace = 'edmoon.net';
const key = 'visits';

export const recordVisit = async () => {
  try {
    const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
    if (!response.ok) throw new Error('API response not OK');
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error("Failed to record visit:", error);
    return null;
  }
};

export const getVisitCount = async () => {
  try {
    const response = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`);
    if (!response.ok) throw new Error('API response not OK');
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error("Failed to get visit count:", error);
    return null;
  }
};