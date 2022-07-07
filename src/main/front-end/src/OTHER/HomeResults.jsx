import React, {useState, useEffect}  from 'react'
import Service from '../service/Service'
import {useLocation} from 'react-router-dom';
import ButtonForFirstPage from '../components/ButtonForFirstPage';
import Save from '../components/Save';
import Highlighter from "react-highlight-words";
import SaveIDs from '../components/SaveIDs';

function HomeResults ({navigation}) {
    const [results, setResults] = useState([])
    const location = useLocation();

    useEffect(() => {
        getChars()
    }, [])
    
    const getChars = () => {
        console.log(location.state)
        Service.getHomeAttribute(location.state).then((response) => {
            setResults(response.data)
            console.log(response.data);
        });
    };

    return (
    <div className=' first-page '>
        <div className="d-inline-flex flex-row" >
            <ButtonForFirstPage />
            <div className='d-inline-flex justify-content-center '>
            <h2 className="text-center " style ={{color: '#242b2f', margin:"50px" , marginLeft: "400px",padding: "0px"}}>Appliance's Characteristics List</h2>
            </div>
            <SaveIDs data={results} filename={"IDs.csv"} />
            <Save  data={results} filename={"homeAttribute.csv"}/>
            </div>
            <pre><Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={["installationId"]}
            autoEscape={true}
            textToHighlight={JSON.stringify(results, null, 10) } /></pre>
    </div>

    )
    
}

export default HomeResults