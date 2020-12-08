const count = {
    current: () => {
        return updatedCount;
    },
    addCount: () => {
        updatedCount = updatedCount++;
        console.log(updatedCount);
    }
}

export default count;