<template>
    <div class="flex">
        <div class="container mt-12 ml-6">
              <div class="grid grid-cols-1 lg:gap-20 gap-6 mb-6 lg:grid-cols-4">
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-green-500 border rounded-md h-16 w-16 -mr-16"> </div>
                      <div class="mt-1 lg:text-xl  text-lg font-semibold text-gray-900">
                          Students
                      </div>
                      <div class="lg:text-sm text-xs font-medium text-gray-500 truncate">
                        6,230 Evaluators
                      </div> </div>
                      <div class="mt-1 lg:text-3xl text-xl font-semibold text-gray-900">
                        6,230 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                     
                      <div class="text-sm font-medium bg-green-500 truncate line-fill rounded-sm">
                        
                      </div>
                      
                  </div>
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-blue-500 border rounded-md h-16 w-16 -mr-16"> </div>
  
                      <div class="mt-1 lg:text-xl  text-lg font-semibold text-gray-900">
                          Peer
                      </div>
                      <div class="lg:text-sm text-xs font-medium text-gray-500 truncate">
                        63 Evaluators
                      </div>
                    </div>
                      <div class="mt-1 text-3xl font-semibold text-gray-900">
                        63 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                      <div class="text-sm font-medium bg-blue-500 truncate line-fill rounded-sm">
                        s
                      </div>
                  </div>
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-orange-500 border rounded-md h-16  w-16 -mr-16"> </div>
                      <div class="mt-1 lg:text-xl  text-lg font-semibold text-gray-900">
                          Self
                      </div>
                      <div class="lg:text-sm text-xs font-medium text-gray-500 truncate">
                        121 Evaluators
                      </div>
                      </div>
                      <div class="mt-1 text-3xl font-semibold text-gray-900">
                        121 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                      <div class="text-sm font-medium bg-orange-500 truncate line-fill rounded-sm">
                        s
                      </div>
                  </div>
                  <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                    <div class="row-span-3 bg-violet-500 border rounded-md h-16 w-16 -mr-16"> </div>
                      <div class="mt-1 lg:text-xl  text-lg font-semibold text-gray-900">
                          Supervisor
                      </div>
                      <div class="lg:text-sm text-xs font-medium text-gray-500 truncate">
                        4 Evaluators
                      </div>
                      </div>
                      <div class="mt-1 text-3xl font-semibold text-gray-900">
                        4 <span class="text-sm font-medium text-green-500 truncate">100%</span> 
                      </div>
                      <div class="text-sm font-medium bg-violet-500 truncate line-fill rounded-sm">
                        s
                      </div>
                  </div>
              </div>
              <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="flex justify-between bg-gray-100 py-3 rounded-lg">
                    
                    <div class="flex  w-15 h-8 bg-white ml-4 mt-1 rounded-lg"> 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="ml-5"><rect width="256" height="256" fill="none"/><circle cx="116" cy="116" r="84" fill="none" stroke="#004" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/></svg>
  
                                <input type="text" placeholder="Search"  class="rounded-lg pr-16 text-lg pl-2 tex"> </div>
                    <div class=""><Button class="btn mr-4"> <Icon :name="'filter'"/>Filter</Button></div>
                  </div>
                  <div class=" flex justify-center">
             <table class="table-fixed">
                        <thead>
                          <tr>
                            <th >Evaluator Name</th>
                            <th >Date Evaluation</th>
                            <th >Evaluator Type</th>
                            <th >Evaluation Period</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            
                            <td>Evaluator 1</td>
                            <td>2/19/21</td>
                            <td>Student</td>
                            <td>A.Y. 2022-2023 2nd Sem</td>
                            <td> </td>
                          </tr>
                          <tr>
                            
                            <td>Evaluator 2</td>
                            <td>5/7/16</td>
                            <td>Peer</td>
                            <td>A.Y. 2022-2023 2nd Sem</td>
                            <td> </td>
  
                          </tr>
                          <tr>
                            <td>Evaluator 3</td>
                            <td>9/18/16</td>
                            <td>Supervisor</td>
                            <td>A.Y. 2022-2023 2nd Sem</td>
                            <td> </td>
  
                          </tr>
                          <tr>
                            <td>Evaluator 4</td>
                            <td>2/11/12</td>
                            <td>Student</td>
                            <td>A.Y. 2022-2023 2nd Sem</td>
                            <td> </td>
                          </tr>
                           <tr>
                            <td>Evaluator 5</td>
                            <td>9/18/16</td>
                            <td>Student</td>
                            <td>A.Y. 2022-2023 2nd Sem</td>
                            <td> </td>
                          </tr>
                        </tbody>
                      </table>
            <!--
           
                <Table class="mt-6 md:mt-0 lg:mt-0 xl:mt-0" :idName="'myWorksTable'" :labels="table_headers"
                  :data="displayedJournals" :notifField="'file_id'" :notifID="notifID">
                  <template v-slot:file_createdAt="{ item }">
                    {{ timeToday(formatDate(item.file_createdAt)) }}
                  </template>
                  <template v-slot:js_status_desc="{ item }">
                    <span class="inline-flex items-center rounded-full uppercase m-0.5 px-4 py-1 text-xs "
                      :class="item.js_status_desc == 'For Approval' ? 'bg-red-100 text-red-800' : item.js_status_desc == 'Verified' ? 'bg-blue-100 text-blue-800' : item.js_status_desc == 'Pending' ? 'bg-yellow-100 text-yellow-800' : item.js_status_desc == 'Endorsed' ? 'bg-blue-100 text-blue-800' : item.js_status_desc == 'Published' ? 'bg-green-100 text-green-800' : ''">{{
                        item.js_status_desc }}</span>
                  </template>
                  <template v-slot:file_isPublished="{ item }">
                    <span class="inline-flex items-center rounded-full uppercase m-0.5 px-4 py-1 text-xs "
                      :class="item.file_isPublished == 0 ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'">{{
                        item.file_isPublished == 0 ? 'Unpublished' : "Published" }}</span>
                  </template>
                  <template v-slot:action="{ item }">
                    <button v-if="item.remarksCount > 0" @click="viewJournal(item)"
                      class=" bg-white hover:bg-FFB800 hover:text-white text-FFB800 font-semibold py-1 px-3 text-xs border border-FFB800 rounded shadow ">
                      View
                    </button>
                    <button v-if="item.file_journalstatusID == 1" @click="toggleUpdateModal('update', item)"
                      class=" bg-white hover:bg-FFB800 hover:text-white text-FFB800 font-semibold py-1 px-3 text-xs border border-FFB800 rounded shadow ">
                      Update
                    </button>
                  </template>
                </Table>
                <div
                  class=" grid font-poppins w-full sm:flex md:flex lg:flex flex-row justify-end md:w-full sm:w-full mx-auto items-center border-l border-b border-r border-gray-400 rounded-bl-lg rounded-br-lg pt-4 pb-4">
                  <div class=" w-auto sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6 gap-x-4 mx-3 flex ">
                    <div class="hidden text-xs text-gray-600 md:flex lg:flex xl:flex 2xl:flex w-1/3 md:w-2/5 items-center ">
                      <label for="" class="w-2/3">Rows per page</label>&nbsp;
                      <select class="w-1/3 border-gray-600 border-b" v-model="perPage">
                        <option :value="item" v-for="item in selectPerPage" :key="item">
                          {{ item }}
                        </option>
                      </select>
                    </div>
                  
                  </div>
                  <div class="hidden md:flex lg:flex xl:flex 2xl:flex w-1/3 md:w-2/5">
                     // <div class="flex" v-if="results != 0">
                      <span class="text-xs m-auto text-gray-600 dark:text-gray-400">
                        Showing
                        <span class="font-semibold text-gray-900 dark:text-white">{{ fromPage }}</span>
                        to
                        <span class="font-semibold text-gray-900 dark:text-white">{{ toPage }}</span>
                        of
                        <span class="font-semibold text-gray-900 dark:text-white">{{ results }}</span>
                        Entries
                      </span>
                    </div>
                    
              </div>
        </div>  -->  
               
    </div>  
    </div> 
    </div>
  </div>
  
  </template>

<script lang="ts">
export default{
    name:'home'
}

</script>
<style scoped lang="scss">

</style>
