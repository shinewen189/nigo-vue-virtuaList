
## nigo-vue-virtual-list v1.0.0
`    npm install nigo-vue-virtual-list
`
`    yarn add nigo-vue-virtual-list
`
## Example Usage
`    import {VirtualList} from 'nigo-vue-virtual-list'
`

```
 <template
    :list= "[1,2,23,2,2]"
    :list-width = "500"
    :list-height = "500"
    #li="{virtualList}">
             <li class="item" :style="{backgroundColor : randomBack[index] }" v-for="(i ,index) in virtualList" :key="index">
                 <div  >{{i}}</div>
               
             </li>
         </template>
```

## props
| 参数 | 说明 | 类型 | 默认值 |
| :---| :--- | :--- | :--- |
| list | 盒子宽度 | String | auto |
| list-height | 列表盒子高度 | Number |  |
| list-width | 列表盒子宽度 | Number |  |
| list-item-height | 列表项高度 | Number |  |


 ### Keywords
vue JavaScript virtualList
