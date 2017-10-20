angular.module('task-module')
.service('taskRESTService',taskRESTService);

function taskRESTService($http){
    var serverAddress = "http://localhost:5000/api/v1.0";
    return {
        createTask : createTask,
        readTask : readTask,
        readTaskById : readTaskById,
        updateTaskById : updateTaskById,
        deleteTaskById : deleteTaskById
    };
    // function to create task 
    function createTask(taskModel){
        return new Promise(function(resolve,reject){
            var options = {
                method : "POST",
                url : serverAddress+"/task",
                data : taskModel
            };
            //sending data to server
            $http(options)
            .then(function(data){
                resolve(data.data);
            }).catch(function(error){
                console.log(error);
                resolve(error);
            });
        });
    }

    function readTask(){
        return new Promise(function(resolve,reject){
            var options = {
                method : "GET",
                url : serverAddress+"/task"
            };
            $http(options)
            .then(function(data){
                resolve(data.data.data);
            })
            .catch(function(error){
                console.log(error);
                reject(error);
            });
        });
    }
    // read task by id
    function readTaskById(taskId){
        return new Promise(function(resolve,reject){
           var options = {
                method : "GET",
                url : serverAddress + "/task/id/"+taskId
           };
           $http(options)
           .then(function(data){
               resolve(data.data);
           }).catch(function(error){

           });
        });
    }
    function updateTaskById(taskId,taskModel){
        return new Promise(function(resolve,reject){
            var options = {
                method : "PUT",
                url : serverAddress + "/task/id/"+taskId,
                data : taskModel
            };
            $http(options)
            .then(function(data){
                resolve(data.data);
            }).catch(function(error){
                reject(error);
            });

        });
    }
    function deleteTaskById(taskId){
        return new Promise(function(resolve,reject){
            var options = {
                method : "DELETE",
                url : serverAddress + "/task/id/"+taskId
            };
            $http(options)
            .then(function(data){
                resolve(data.data);
            }).catch(function(error){
                console.log(error);
                alert('Error occurred while deleting task');
            });
        });
    }

}
