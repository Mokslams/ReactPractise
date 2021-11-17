

const renderGroup = (group, category) => {
return `
<div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#${group}" aria-expanded="true" aria-controls="collapseOne">
          ${group},${category}
        </button>
      </h2>
    </div>

    <div id="${group}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      
      </div>
    </div>`

}

export default renderGroup