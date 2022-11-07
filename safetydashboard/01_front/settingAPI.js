const httpAPI = () => {
    ///////////  For Deployment  ////////////
    const isAPI = "https://safety.silvercare.io/backend";
    
    ///////////  For Local  ////////////
    // const isAPI = "http://localhost:8888/backend";
    return isAPI;
}

/////////// ++++++++++++++ ////////////

export {httpAPI}