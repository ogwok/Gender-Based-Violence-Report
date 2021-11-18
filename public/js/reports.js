

var app = new Vue({
    el: '#app',
    data: {
      reports: []
    },
    mounted(){
        const ref = firebase.firestore().collection('reports');

        ref.onSnapshot(snapshot => {
            let requests = [];
            snapshot.forEach(doc => {
              requests.push({...doc.data(), id: doc.id})
            })
            this.reports = requests;
            console.log(requests);
        })
       
    }
  })




// let html = ``;
// requests.forEach(request => {
//     html += `<li>${request.text}</li>`
// });
// document.querySelector('ul').innerHTML = html;