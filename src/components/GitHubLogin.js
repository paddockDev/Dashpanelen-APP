const GitHubLogin = () => {
  return (
    <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user:email`} className="px-4 py-3 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none">
      Login with GitHub
    </a>
  )
}

export default GitHubLogin
