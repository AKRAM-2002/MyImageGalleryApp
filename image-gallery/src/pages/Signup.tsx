import React from 'react'

const Signup = () => {
  return (
    <form>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">My Image Gallery</h1>
      <p className="py-6">Sign up and Share your photos With the World!</p>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SIGNUP</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </form>
  )
}

export default Signup