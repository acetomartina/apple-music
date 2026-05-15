const LoginModal = () => {
  return (
    <div className="modal fade" id="loginModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-light">

          <div className="modal-header border-secondary">
            <h5 className="modal-title">
              Accedi ad Apple Music
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="ID Apple"
            />

            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="modal-footer border-secondary">
            <button className="btn btn-danger w-100">
              Continua
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginModal