import React from 'react'

function DonateForm() {
  return (
<>

<div className='row'>
  <div className='col-6'>
<form className='container'>
  
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="email" class="form-control" id="" aria-describedby=""/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="Email" class="form-control" id=""/>
  </div>
  <div class="mb-3">
    <label for="Donate" class="form-label">RS Donate</label>
    <input type="Email" class="form-control" id=""/>
  </div>

  <select class="form-select" aria-label="Default select example">
  <option selected>Donation catagory</option>
  <option value="1">Money</option>
  <option value="2">Meal</option>
  <option value="3">Other things</option>
</select>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input mt-4
    " id="exampleCheck1"/>
    <label class="form-check-label mt-4" for="exampleCheck1">Donation confirm</label>
  </div>
  <button type="submit" class="btn btn-danger">Donate</button>
</form>
</div>
</div>
</>
  )
}

export default DonateForm