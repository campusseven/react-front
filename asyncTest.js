//1.Promise : Javascript의 비동기(asynch) 처리 객체
//    1.1 state : pendding->fullments(성공 resolve, 실패 reject)
//    1.2 Provider/ Consumer : then(success callback) -성공
//                             catch(fail callback)   -실패
//                             finally(callback)      -무조건 실행

//Provider
let myFirstPromise = new Promise((resolve, reject) => {  
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
        resolve("Success!!");  //resolve또는 reject callback 제공 (없는경우 pendding상태)
     // reject(new Error("Error!")); // Yay! Everything went well!
    }, 250);
  });
  
  //Consumer
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
  }).catch((reason)=>{ 
      console.log(reason);
  }).finally(()=>console.log("자원반납"));


  //async/ await - Promise객체를 쉽게 사용하기 위해 제공되는 키워드
  //async 키워드 - 자동으로 Promise로 설정
  //Provider
  async function fetchUser(){
        return 'async user';
  }

  //Consummer
  const user = fetchUser();
  console.log(user);

  //await - async로 사용 시 순서가 정해진 경우 await
  function delay(ms){
      return new Promise(resolve=>setTimeout(resolve,ms));
  }

  async function readImage(){
      delay(2000);
      return "Read Image";
  }

  async function writeImage(){
      delay(2000);
      return "Write Image";
  }
//병렬처리를 순서대로 
 async function imagePrint(){
    // const read = await readImage();
    // const write = await writeImage();
  
    // return `${read} + ${write}`;
    return Promise.all([readImage(), writeImage()])
    .then(result => result.join('+'));
 }
  
//imagePrint().then((result)=>console.log(result));

