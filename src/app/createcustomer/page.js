import React from "react";

function CreateCustomer() {
  return <section class="bg-light py-3 py-md-5 ">
    <div class="container ">
      <div class="row justify-content-center ">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 ">
          <div class="card border border-light-subtle rounded-3 shadow-sm ">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <div class="text-center mb-3  ">
             
              </div> 
              <h2 class="fs-6 fw-normal text-center text-secondary mb-4 fs-2"><b>Create Customer</b></h2>
              <form action="#!">
                <div class="row gy-2 overflow-hidden">
                  <div class="col-12 form-group">
                    <div class="form-floating mb-3 d-flex align-items-center input-group">
         
                       
                      <input type="email" class="form-control" name="email" id="email" 
                      placeholder="name@example.com" required/>
                      <label for="email" class="form-label">Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" name="number" id="number" value="" placeholder="Mobile" required>
                      <label for="number" class="form-label">Mobile</label>
                                      </div>
                                      </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required>
                      <label for="password" class="form-label">Password</label>
                                          </div>
                                          </div>
                    <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" name="password" id="password" value="" placeholder="Confirm Password" required>
                          <label for="password" class="form-label">Confirm Password</label>
                        </div>
                  </div>
                  <div class="col-12">
                    <div class="d-flex gap-2 justify-content-between">
                     
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid my-3">
                      <button class="btn btn-primary btn-lg" type="submit">Add</button>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
          </div>
          </div>
  </section>


}

export default CreateCustomer;
