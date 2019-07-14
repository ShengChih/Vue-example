<template>
    <div class="col-md-4">
        <div class="event-card">
            <h4 class="catd-title">{{event.titile}}</h4>
            <p class="card-text">{{event.decription}}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group">Date: {{event.date}}</li>
                <li class="list-group">Location: {{event.location}}</li>
                <li class="list-group">Email: {{event.email}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['event']
}
</script>