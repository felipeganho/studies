import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `
        <section class="flex gap-8">
            <AssignmentList :assignments="filters.inProgress" title="In Progress">
                <AssignmentCreate @add="add"/>
            </AssignmentList>

            <div v-show="showCompleted">
                <AssignmentList
                    v-if="showCompleted"
                    :assignments="filters.completed" 
                    title="Completed Assignments" 
                    can-toogle
                    @toogle="showCompleted = !showCompleted"
                />
            </div>
        </section>
    `,

    data() {
        return {
            assignments: [
                // { name: 'Dummy1', complete: false, id: 1, tag: 'math' },
                // { name: 'Dummy2', complete: false, id: 2, tag: 'science' },
                // { name: 'Dummy3', complete: true, id:3, tag: 'math' },
            ],
            showCompleted: true
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        },
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => this.assignments = data)
    },

    methods: {
        add(name) {
            if(name !== '') {
                this.assignments.push({
                    name: name,
                    complete: false,
                    id: this.assignments.length + 1
                })
            }
        }
    }
}