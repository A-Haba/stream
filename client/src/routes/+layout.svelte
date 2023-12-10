<script lang="ts"> 
  import '../app.css'
	import Kusa from '../components/Kusa.svelte';
	import Uooo from '../components/Uooo.svelte';
	import { eventStore } from '../store/store';

  let show: string| undefined = undefined

  const fireKusa = () => {
    if(!!show){
      return
    }
    show = 'kusa',
    setTimeout(()=>{
      show = undefined
    },5000)
  }
  const fireUooo = () => {
    if(!!show){
      return
    }
    show = 'uooo',
    setTimeout(()=>{
      show = undefined
    },5000)
  }

  eventStore.subscribe( (que) => {
    const event = que.get()
    switch(event?.type) {
      case 'kusa':
        fireKusa()
        break;
      case 'uooo':
        fireUooo()
      default:
        break;
    }
  }

  )
</script>

{#if show === 'kusa'}
  <Kusa />
{/if}
{#if show === 'uooo'}
  <Uooo />
{/if}

<slot />