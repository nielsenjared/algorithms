const towers = (discCount) => {

    const towerOne = [...Array(discCount + 1).keys()].slice(1);
    const towerTwo = [];
    const towerThree = [];

    const moveDiscs = (discCount, origin, stage, goal) => {
        if (discCount === 1) {
            let disc = origin.shift();
            goal.unshift(disc);

            return goal;
        }

        moveDiscs(discCount - 1, origin, goal, stage);
        
        let disc = origin.shift();
        goal.unshift(disc);

        moveDiscs(discCount - 1, stage, origin, goal);

        return goal;
    }

    return moveDiscs(discCount, towerOne, towerTwo, towerThree);
}