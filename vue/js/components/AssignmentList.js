import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from "./Panel.js"

export default {
    components: {
        Assignment,
        AssignmentTags,
        Panel
    },

    template: `
        <Panel v-show="assignments.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
                </h2>

                <button v-show="canToogle" @click="$emit('toogle')">&times;</button>
            </div>

            <AssignmentTags
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <Assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id" 
                    :assignment="assignment"/>
            </ul>

            <slot></slot>

            <template #footer>
                footer here
            </template>
        </Panel>
    `,

    props: {
        assignments: Array,
        title: String,
        canToogle: {
            type: Boolean,
            default: false
        },
    },

    data() {
        return {
            currentTag: 'all'
        }
    },
    
    computed: {
        filteredAssignments() {
            if (this.currentTag == 'all') {
                return this.assignments
            }
            return this.assignments.filter(assignment => assignment.tag == this.currentTag)
        }
    }
}