process.on('sveltekit:shutdown', async (reason: 'SIGINT' | 'SIGTERM' | 'IDLE') => {
  console.log('Shutdown Gracefully ...', { reason });
  // anything you need to clean up manually goes in here
  // await jobs.stop();
  // await db.close();
});