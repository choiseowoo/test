' dbinfo.vbs 파일을 불러옵니다.
ExecuteGlobal("dbinfo.vbs")

' ADODB.Connection 객체 생성
Set conn = CreateObject("ADODB.Connection")

' 접속 문자열 설정
connStr = "Provider=OraOLEDB.Oracle;Data Source=" & DATABASE_NAME & ";User ID=" & USER_ID & ";Password=" & PASSWORD & ";"

' 데이터베이스에 연결
conn.Open connStr

If conn.State = 1 Then
    MsgBox "데이터베이스에 성공적으로 연결되었습니다.", vbInformation, "성공"
Else
    MsgBox "데이터베이스 연결에 실패했습니다.", vbCritical, "실패"
    WScript.Quit
End If

' 데이터베이스에 쿼리를 실행하는 예제
sql = "SELECT * FROM 테이블_이름"
Set rs = conn.Execute(sql)

' 결과를 CSV 파일로 출력
' (출력 코드는 앞서 제공된 예제와 동일하므로 생략합니다.)

' 연결 종료
rs.Close
conn.Close

MsgBox "작업이 완료되었습니다.", vbInformation, "완료"
