<script>
import VueCharts from 'vue-chartjs'
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    mounted () {
        this.negatives()
        // Overwriting base render method with actual data.
        this.renderChart({
        labels: ['- -', '-', '- +', '+', '+ +'],
        datasets: [ 
            {
            label: '# of Posts',
            backgroundColor: '#615E7D',
            data: this.dataArray() 
            }
        ]
        })
    },
    methods: {
        negatives(){
            let negatives = []
            let posts = this.$store.state.user.posts
            negatives = posts.filter(function(post){
                return post.polarity === 'negative' && post.polarity_confidence >= 0.75
            })
            return negatives.length
        },
        slightNegatives(){
            let slightNegatives = []
            let posts = this.$store.state.user.posts
            slightNegatives = posts.filter(function(post){
                return post.polarity === 'negative' && post.polarity_confidence < 0.75
            })
            console.log(slightNegatives)
            return slightNegatives.length
        },
        neutrals(){
            let neutrals = []
            let posts = this.$store.state.user.posts
            neutrals = posts.filter(function(post){
                return post.polarity === 'neutral'
            })
            return neutrals.length
        },
        slightPositives(){
            let slightPositives = []
            let posts = this.$store.state.user.posts
            slightPositives = posts.filter(function(post){
                return post.polarity === 'positive' && post.polarity_confidence < 0.75
            })
            return slightPositives.length
        },
        positives(){
            let positives = []
            let posts = this.$store.state.user.posts
            positives = posts.filter(function(post){
                return post.polarity === 'positive' && post.polarity_confidence >= 0.75
            })
            return positives.length
        },
        dataArray(){
            let array = []
            array.push(this.negatives(), 
                    this.slightNegatives(),
                    this.neutrals(),
                    this.slightPositives(),
                    this.positives()
                )
            return array
        }
    }
}
</script>

<style lang="scss">

</style>