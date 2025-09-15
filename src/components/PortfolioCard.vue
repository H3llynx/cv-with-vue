<template>
    <div class="card-outer-box">
        <div class="card-inner-box">
            <slot name="screenshot"></slot>
            <div class="container">
                <div class="flex-row top">
                    <h1>
                        <slot name="heading"></slot>
                    </h1>
                    <div class="flex-row">
                        <slot name="links"></slot>
                    </div>
                </div>
                <div class="flex-row bottom">
                    <slot name="tags"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 0.8rem 0 0.8rem 1.5rem;
}

h1 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-heading);
}

.flex-row {
    display: flex;
    flex-flow: row wrap;
}

.bottom {
    margin-top: 1rem;
    margin-bottom: auto;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 0.2rem;
}

.top {
    align-items: flex-start;
    justify-content: space-between;
}
</style>
