<template>
    <div class='views'>
        <h1 class='title'>Choose your destination:</h1>
        <ul class='videos'>
            <li><iframe width="340" height="192" src="https://www.youtube.com/embed/14O7AxqjiVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="340" height="192" src="https://www.youtube.com/embed/BbT_e8lWWdo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="340" height="192" src="https://www.youtube.com/embed/qhLExhpXX0E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="340" height="192" src="https://www.youtube.com/embed/7AkbUfZjS5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="340" height="192" src="https://www.youtube.com/embed/Ek6nZICuAxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="340" height="192" src="https://www.youtube.com/embed/gU9uURLxonI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></iframe></li>
        </ul>
        <!-- <Pano type='video' source='https://www.youtube.com/watch?list=PLbsGxdAPhjv_tgCNWGaGvSnlIMZNkmnrM'></Pano> -->
    </div>
</template>

<script>
import { Pano } from 'vuejs-vr'
export default {
    components: { Pano }
}
</script>

<style lang="scss">
.title {
    padding: 2% 0 0 15%;
}
.videos {
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    margin: auto;
    li {
        width: 340px;
        height: 192px;
    }
}
</style>