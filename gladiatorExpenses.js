function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {

    let expenses = 0;
    let lostFightsCounter = 0;
    let shieldBrokeCounter = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
        lostFightsCounter++;

        if (lostFightsCounter % 2 === 0) {
            expenses += helmetPrice;
        }
        if (lostFightsCounter % 3 === 0) {
            expenses += swordPrice;
        }
        if (lostFightsCounter % 6 === 0) {
            expenses += shieldPrice;
            shieldBrokeCounter++;
            if (shieldBrokeCounter % 2 === 0) {
                expenses += armourPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)