<template id="perceivable">
    <div class="container">
        <h2 class="principle-title">{{perceivables.title}}</h2>
        <p>{{perceivables.description}}</p>
        <section class="guidelines">
            <h3 class="section-title">Guidelines</h3>
            <template v-for="guideline in perceivables.guidelines">
                <h4>{{ guideline.title }} - {{guideline.ref_id}}</h4>
                <p>{{ guideline.description }}</p>
                <p><a :href="guideline.url">{{guideline.url}}</a></p>
                <div class="success-criteria" v-for="criteria in guideline.success_criteria">
                    <h5 class="success-criteria=title">{{criteria.title}} - {{criteria.ref_id}}</h5>
                    <p class="level">{{criteria.level}}</p>
                    <p>{{criteria.description}}</p>
                    <ul class="references">
                        <template v-for="reference in criteria.references">
                            <li><a :href="reference.url">{{reference.title}}</a></li>
                        </template>
                    </ul>
                    <button v-on:click=" collapsed = !collapsed">Special Cases</button>
                    <div v-bind:class="{'is-collapsed' : collapsed }" class="special-cases">
                        <template v-for="special_case in criteria.special_cases">
                            <p>{{special_case.title}} - {{special_case.description}} ({{special_case.type}})</p>
                        </template>
                    </div>
                </div>
            </template>
            <hr>
        </section>

    </div>
</template>

<script>

  import Perceivable from '../data/Perceivable.json'
  const perceivable = Perceivable;

  export default {
    data: function () {
      return {
        perceivables: perceivable,
        collapsed: true
      };
    },
  }
</script>

<style scoped>

    h1,
    h2 {
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

    .is-collapsed {
        display: none;
    }
</style>


