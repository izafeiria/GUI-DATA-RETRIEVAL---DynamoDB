

const SaveIDs = (props) => {

   
    const { parse } = require('json2csv')
    const fields = ["installationId"];
    
    const save = e => {
    e.preventDefault()
    const opts =  { fields }
    const csv = parse(props.data, opts)
    download(csv,props.filename)

    }



    const download = (data,fileName) => {
        const blob = new Blob([data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', fileName );
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      return (
    
    
        <button className="button buttons" style={{marginLeft: "450px"}} onClick={save}> Export IDs to CSV </button>
    
    
      )
    
    }
    
    export default SaveIDs