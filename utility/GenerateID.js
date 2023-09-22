function GenerateID(Appendstr){
    return `${Appendstr}_${Date.now().valueOf()}`;
}

export default GenerateID;