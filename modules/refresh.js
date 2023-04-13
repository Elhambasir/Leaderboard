const datas = document.querySelector('.datas');
const Ranks = {
  displayRanks: () => {
    const getApiResponse = async () => {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/knTJZuTqnS5CkT6fKiMm/scores/',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    };

    getApiResponse().then((data) => {
      datas.innerHTML = '';
      const rankData = data.result;
      // sort by score
      rankData.sort((x, y) => y.score - x.score);
      rankData.forEach((element, index) => {
        if (index >= 0 && index < 10) {
          datas.innerHTML += `
             <tr>
             <td class="data">${element.user}</td>
             <td class="data">${element.score}</td>
             </tr>
           `;
        }
      });
    });
  },
};

export default Ranks;