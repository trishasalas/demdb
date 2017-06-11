<template id="Understandable">
    <div class="container">
        <h2>{{understandables.title}}</h2>
        <p>{{understandables.description}}</p>
        <h3>Guidelines</h3>
        <div v-for="guideline in understandables.guidelines">
            <h4>{{ guideline.title }} - {{guideline.ref_id}}</h4>
            <p>{{ guideline.description }}</p>
            <p><a :href="guideline.url">{{guideline.url}}</a></p>
            <div v-for="criteria in guideline.success_criteria">
                <h5>{{criteria.title}} - {{criteria.ref_id}}</h5>
                <p>{{criteria.level}}</p>
                <p>{{criteria.description}}</p>
                <div v-for="reference in criteria.references">
                    <div><a :href="reference.url">{{reference.title}}</a></div>
                </div>
                <div v-for="special_case in criteria.special_cases">
                    <ul>
                        <li>
                            <div>{{special_case.title}}</div>
                            <div>{{special_case.description}}</div>
                            <div><strong>{{special_case.type}}</strong></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import Understandable from '../data/Understandable.json'
  const understandable = Understandable;

  export default {
    data: function () {
      return {
        understandables: understandable,
      };
    },
  }
</script>

<style scoped>

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

