function wheelOfFortune() {
    let prizes = ['Prize 1', 'Prize 2', 'Better luck next time'];
    let nginx = JSON.parse(localStorage.getItem('nginx')) || [21, 1, 79]; // Получаем шансы из localStorage или устанавливаем начальные значения

    let sum = nginx.reduce((a, b) => a + b, 0); // Суммируем все шансы
    let rand = Math.random() * sum; // Генерируем случайное число от 0 до суммы шансов

    let topRange = 0;
    for (let i = 0; i < nginx.length; i++) {
        topRange += nginx[i];
        if (rand < topRange) {
            if (nginx[i] > 0 && i < 2) { // Уменьшаем только Prize 1 и Prize 2
                nginx[i]--; // Уменьшаем количество призов, если они еще есть
                // nginx[2]++; // При уменьшении одного из них к шансу 'Better luck next time' прибавляется 1
                localStorage.setItem('nginx', JSON.stringify(nginx)); // Сохраняем обновленные шансы в localStorage
            }
            return prizes[i];
        }
    }
}
console.log(wheelOfFortune()); // Запускаем колесо фортуны и выводим результат