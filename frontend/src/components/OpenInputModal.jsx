function OpenInputModal() {
  return (
    <>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <form id="modalForm">
                    <label for="inputBox">Enter something:</label>
                    <input type="text" id="inputBox" name="inputBox" />
                    <button type="button" id="saveBtn">Save</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default OpenInputModal;
