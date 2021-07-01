<template>
    <div class="virtualList" :style="{width,height}">
        <ul class="list">
            <slot name="li" :virtualList="virtualList"></slot>
        </ul>
    </div>
</template>
<script>
    import 'intersection-observer'

    export default {
        name: 'virtualListItem',
        props: {
            list: Array,
            listWidth: [String, Number],
            listHeight: [String, Number],
            listItemHeight: {
                type: Number,
                default: 120
            }
        },
        data() {
            return {
                startIndex: 0,
                virtualList: [],
                endIndex: 0,
                observer: null,
                count: Math.ceil(innerHeight / 120)
            }
        },
        computed: {
            width() {
                return this.listWidth ? this.listWidth + 'px' : 'auto'
            },
            height() {
                return this.listHeight ? this.listHeight + 'px' : 'auto'
            }
        },
        created() {
            this.loadData(this.startIndex, this.count)
        },
        mounted() {
            this.observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    this.startIndex = this.startIndex + this.count
                    this.endIndex = this.startIndex + this.count
                    this.loadData(this.startIndex, this.endIndex)
                    if (this.endIndex >= this.virtualList.length) {
                        this.observer.unobserve(entries[0].target)
                    }
                }

            }, {threshold: [0, 1]})
        },
        methods: {
            loadData(startIndex, endIndex) {
                this.virtualList = this.virtualList.concat(this.list.slice(startIndex, endIndex))
                this.$nextTick().then(() => {
                    const li = this.$el.getElementsByTagName('li')[this.virtualList.length - 1]
                    this.count = Math.ceil(this.listHeight ? this.listHeight / li.offsetHeight : innerHeight / li.offsetHeight)
                    this.observer.observe(li)
                })
            }
        }
    }
</script>

<style scoped>
    .virtualList {
        margin: 0 auto;
        overflow: scroll;
    }

    .list {
        list-style: none;
    }
</style>
