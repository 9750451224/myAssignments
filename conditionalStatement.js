function launchBrowser()
{
    const browserName = "firefox";
    if(browserName == "Chrome")
    {
        console.log(browserName);
    }
    else if(browserName == "Edge")
    {
        console.log(browserName);    
    }
    else
    {
        console.log("Unsupported browser",browserName);    
    }
}
launchBrowser();

function runTests()
{
    let testType = "smoke";
    switch (testType) 
    {
        case "sanity":
            console.log(testType)
            break;
        case "regression":
            console.log(testType)
            break;
        default:
            console.log(testType)
            break;
    }
}
runTests();
