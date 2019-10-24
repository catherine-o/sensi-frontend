<script>
import VueCharts from 'vue-chartjs'
import { Bar } from 'vue-chartjs'
export default {
    extends: Bar,
    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
        labels: ['Negative', 'Slightly Negative', 'Neutral', 'Slightly Positive', 'Positive'],
        datasets: [      //need better labels
            {
            label: 'Number of Posts',
            backgroundColor: 'rgb(226, 241, 247)', //needs more saturation
            data: [35, 20, 12, 39, 35] //need to render from post counts
            }
        ]
        })
    }
}
</script>

<style lang="scss">
.small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>