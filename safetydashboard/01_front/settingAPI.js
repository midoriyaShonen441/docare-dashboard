const httpAPI = () => {
    ///////////  For Deployment  ////////////
    const isAPI = "http://localhost:80/backend";
    
    ///////////  For Local  ////////////
    // const isAPI = "http://localhost:8888/backend";
    return isAPI;
}

/////////// ++++++++++++++ ////////////

export {httpAPI}