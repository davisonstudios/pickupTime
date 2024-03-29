import Airtable from "airtable"
var base = new Airtable({apiKey: 'keyG1C4CAi8IIfhzl'}).base('appiNbdhtsY6TzROo')


function getRecs(completion) {
    const newStudents = []

    base('Students').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 300,
        view: "Students"
    }).eachPage(function page(records, fetchNextPage) {
        records.map(record => {
            let newRec = {
                id: record.get('id'),
                name: record.get('Name'),
                ready: record.get('Pickup Ready'),
                time: record.get('Event Time'),
            }
            newStudents.push( newRec )
        })
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage()
    }, function done(err) {
        if (err) { console.error(err); return; }
        completion( newStudents )
    })        
}

function updateRec(student, completion) {
    // alert( student.id )
    base('Students').update([
        {
          "id": student.id,
          "fields": {
            "Pickup Ready": student.ready
          }
        }
      ], function(err, records) {
        if (err) { console.error(err);return; }
        completion()
      });
      
}

export { getRecs, updateRec }