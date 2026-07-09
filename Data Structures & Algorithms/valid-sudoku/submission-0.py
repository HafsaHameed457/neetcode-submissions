class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        cell_record=defaultdict(list)
        for i in range(len(board)):
            row={}
            col={}
            
            for j in range(len(board)):
                if board[i][j]!=".":
                    if board[i][j] in cell_record[(i//3,j//3)]:
                        return False
                    else: 
                        cell_record[(i//3,j//3)].append(board[i][j])
                    if row.get(board[i][j],0)<1:
                        row[board[i][j]]=1
                    else:
                        return False
            for k in range(len(board)):
                if board[k][i]!=".":
                    if col.get(board[k][i],0)<1:
                        col[board[k][i]]=1
                    else:
                        return False


        return True
        