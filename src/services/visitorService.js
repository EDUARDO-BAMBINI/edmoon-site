// src/services/visitorService.js

const namespace = 'edmoon.net'; // Унікальний ідентифікатор для вашого сайту
const key = 'visits';

// Функція для реєстрації нового візиту та отримання актуальної кількості
export const recordVisit = async () => {
  try {
    const response = await fetch(`https://api.countapi.xyz/hit/<span class="math-inline">\{namespace\}/</span>{key}`);
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error("Failed to record visit:", error);
    return null;
  }
};

// Функція для отримання кількості візитів без їх збільшення
export const getVisitCount = async () => {
  try {
    const response = await fetch(`https://api.countapi.xyz/get/<span class="math-inline">\{namespace\}/</span>{key}`);
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error("Failed to get visit count:", error);
    return null;
  }
};