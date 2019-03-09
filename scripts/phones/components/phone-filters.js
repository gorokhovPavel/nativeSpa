import componentFun from '../../componentFun.js';

export default PhoneFilters;

function PhoneFilters(element){

  componentFun.apply(this, arguments);

  window.handlePhonesSort = (event) => {

    this.sort(event.target.value);
  };
  
  window.handlePhonesSearch = (event) => {

    this.search(event.target.value);
  };
  
  this._render = function(){
    
    this._element.innerHTML = `
      <p>
        Search:
        <input
          oninput="window.handlePhonesSearch(event)"
          type="text"
        >
      </p>

      <p>
        Sort by:
        <select onchange="window.handlePhonesSort(event)">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    `;
  }

  this._render();
}