// handle increment counter for page loader

const loadingPercentageH1 = document.querySelector('.page-loader-percentage');
let currentLoadingPercentage = 0;

const updateLoadingPercentage = () => {
    currentLoadingPercentage++;
    loadingPercentageH1.innerText = `${currentLoadingPercentage}%`;
    if(currentLoadingPercentage === 100) currentLoadingPercentage = 0;
};

const tickIntervalHandle = window.setInterval(updateLoadingPercentage, 200);

// ----------------------------------------