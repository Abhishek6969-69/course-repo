
// const heading=React.createElement("h1",
// {id:"heading"},
// "hello guyzz how are you");
// console.log(heading);
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

// new point

//     <div class="parent">
//     <div class="child">
//         <h1>i am h1 tag</h1>
  //       <h2>i am h2 tag</h2>
//     </div>
//<div class="child-2">
//         <h1>i am h1 tag</h1>
  //       <h2>i am h2 tag</h2>
//     </div>
//    </div>
// create element creates object while render convert it into html tag

// const parent=React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),React.createElement("div",{id:"child-2"},
// [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])
// ]


// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// practice

const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello there budddy"),React.createElement("h1",{},"hello budddy my name is abhi")]),
React.createElement("div",{id:"child-2"},
[React.createElement("h1",{},"hello there budddy"),React.createElement("h1",{},"hello budddy my name is abhi")])]

)

let root=ReactDOM.createRoot(document.querySelector("body"));
root.render(parent);