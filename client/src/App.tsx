function App() {
  const googleAuth = () => {
    window.open(`http://127.0.0.1:8000/auth/google`, '_self');
  };

  return (
    <div className={''}>
      <h1 className={''}>Sign up Form</h1>
      <div className={''}>
        <div className={''}></div>
        <div className={''}>
          <button className={''} onClick={googleAuth}>
            <span>Sing up with Google</span>
          </button>
          <button className={''} onClick={googleAuth}>
            <span>Logout</span>
          </button>
          <p className={''}></p>
        </div>
      </div>
    </div>
  );
}

export default App;
