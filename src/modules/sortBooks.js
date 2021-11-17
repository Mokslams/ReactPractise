const sortBooks = (data) => {
    for (let category in data) {
        data[category]=data[category].sort((el1, el2) => {
            if (el1.name < el2.name) {
                return -1;
            }
            if (el1.name > el2.name) {
                return 1;
            }
            return 0;
        })
    }
};

export default sortBooks