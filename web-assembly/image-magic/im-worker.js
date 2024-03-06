var Module = {
    locateFile: _ => 'im.wasm',
    noInitialRun: true,
    moduleLoaded: false,
    messagesToProcess: [],
    print: text => {
        console.log(text)
    },
    printErr: text => {
        console.error(text);
        postMessage({ type:'convertError', data:text})
    }
}
Module.onRuntimeInitialized = function () {
    Module.moduleLoaded = true
    FS.mkdir('/im')
    FS.currentPath = '/im'
  
    postMessage({
        type: "ready"
    });
    // getImg(Module);
}
onmessage = function(e) {
    if(Module.moduleLoaded){
        if(e.data.type == 'cmd'){
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'work', data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                   // postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }

        if(e.data.type == 'imageupload' || e.data.type == 'eccomerceimageupload' || e.data.type == 'presentationimageupload'){
            let postMessageType = `done${e.data.type}`;
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:postMessageType, data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }



        if(e.data.type == 'imageuploadrecentfile' || e.data.type == 'imageuploadobjecttemplate'){
            let outPutKey = "done"+e.data.type
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:outPutKey, data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }


        if(e.data.type == 'compressfordownload'){
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'donecompressionfordownload', data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }


           

        }

        if(e.data.type == 'compressforproductiondownload' || e.data.type == 'compressforeccommerceUpload' || e.data.type == 'compressforworkfilesUpload'){
            var outputType = e.data.type;
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'done'+outputType, data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }



        


        if(e.data.type == 'pre-render'){
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'pre-render', data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }


        if(e.data.type == 'replaceimage'){
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'donereplace', data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }


        if(e.data.type == 'resize'){
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'doneresize', data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }
        if(e.data.type == 'resizeWithMask'){
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'doneresizewithmask', data:ab , cid:cid}, [ab])
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }



        if(e.data.type == 'renderVideo'){
            var command = e.data.data.command;
            var files = e.data.data.files;         
            var cid = e.data.data.cid;
            var outputFile = e.data.data.outputFile;
            if(files.length){
                Promise.all(files.map(file=>{
                    var url = file;                  
                    return fetch(url).then(data=>{
                        console.log(data)
                        if(data.status != 200){
                            throw `fetch ${file} error: ${data.statusText}`
                        }else{
                            return data.arrayBuffer()
                        }
                        
                    }).then(ab=>{
                        FS.writeFile("input.png",new Uint8Array(ab))
                        return true
                    })
                })).then(_=>{
                    Module.callMain(command);
                    var ab = FS.readFile(outputFile).buffer;
                    postMessage({ type:'doneVideoframe', data:ab , cid:cid}, [ab]);
                    
                  
                   
                }).catch(err=>{
                    console.log(err);
                    postMessage({ type:'error', data:err , cid:cid})
                })
            }

        }


        if(e.data.type == 'converBase64'){

            var command = "convert 'inline:data:, R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7' b64_folder.gif"
            

      Module.callMain(command);
      
     // postMessage({ type:'doneBase64', data:ab}, [ab]);



      
        }












        




    }
}
importScripts('im-wasm.js'); 